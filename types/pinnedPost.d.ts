export default interface pinnedPostProps {
  node: {
    _meta: { uid: string };
    title: string;
    created_at: string;
    categories: string;
    description: { text: string };
  };
}
