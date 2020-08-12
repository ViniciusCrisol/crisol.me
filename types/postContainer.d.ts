export default interface postContainerProps {
  node: {
    _meta: { uid: string };
    title: string;
    created_at: string;
    categories: string;
    description: { text: string };
  };
}
