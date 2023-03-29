import EventEmitter from '@/utils/event-emitter.util'
import connecterPost from '@/connecters/post'
import { IFullPostResponse, IPostResponse } from '@/types/response/post'

class Post extends EventEmitter<'updatePosts' | 'updateShowPost'> {
  private posts: IPostResponse[] = []
  private showPost?: IFullPostResponse

  public async pullAll ({ limit }: { limit: number | undefined }) {
    this.posts = await connecterPost.pullAll({ limit })
    return this.posts
  }

  public async show ({ idPost }: { idPost: number }) {
    this.showPost = await connecterPost.show({ idPost })
    return this.showPost
  }
}

export default new Post()
