import { API, graphqlOperation } from "aws-amplify";


const listPosts = `query listPosts {
    listPosts{
      items{
        id
        title
        user
        description
      }
    }
  }`;
  const addPost = `mutation createPost($title:String! $user: String $description: String!) {
    createPost(input:{
      title:$title
      user: $user
      description:$description
    }){
      id
      title
      user
      description
    }
  }`;

  export const postMutation = async (postDetails: any) => {
    console.log('post mutation');
    const newPost = await API.graphql(graphqlOperation(addPost, postDetails));
  };
  export const listQuery = async () => {
    console.log('listing todos');
    const allTodos = await API.graphql(graphqlOperation(listPosts));
    return JSON.stringify(allTodos);
  };