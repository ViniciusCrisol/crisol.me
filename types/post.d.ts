export default interface postsProps {
  post: {
    title: string;
    content: RichTextBlock[];
    description: {
      text: string;
    }[];
  };
}
