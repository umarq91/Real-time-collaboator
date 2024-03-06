import {v} from "convex/values" 
import { query } from "./_generated/server"


export const get = query({
    args:{
        orgId:v.string(),
        search:v.optional(v.string())
    },
    handler:async(ctx,args)=>{
        const identity = await ctx.auth.getUserIdentity();

        if(!identity){
            throw new Error("Unauthorized")
        }

        const title = args.search as string;
        let boards= [];

        if (title) {
          // search w query
          boards = await ctx.db
            .query("boards")
            .withSearchIndex("search_title", (q) =>
              q.search("title", title).eq("orgId", args.orgId)
            )
            .collect();
        } else {
          boards = await ctx.db
            .query("boards")
            .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
            .collect();
        }



      


        const boardsWithFavoriteRelation = boards.map((board) => {
            return ctx.db
              .query("userFavorites")
              .withIndex("by_user_board", (q) => 
                q
                  .eq("userId", identity.subject)
                  .eq("boardId", board._id)
              )
              .unique()
              .then((favorite) => {
                return {
                  ...board,
                  isFavorite: !!favorite,
                };
              });
          });
      
          const boardsWithFavoriteBoolean = Promise.all(boardsWithFavoriteRelation);
      
          return boardsWithFavoriteBoolean;
        },
      });