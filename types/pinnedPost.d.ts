export default interface pinnedPostProps {
  node: {
    _meta: {
      uid: string;
    };
    title: string;
    thumbnail: {
      url: string;
    };
    created_at: string;
    description: {
      text: string;
    };
  };
}
