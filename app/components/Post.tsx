export default function Post({
  id,
  title,
  content,
  authorName,
  authorEmail,
}: any) {
  return (
    <div className="border border-fuchsia-600 p-6 m-10 ">
      <h1>{authorName}</h1>
      <h1>{authorEmail}</h1>
      <h1>{title}</h1>
      <h1>{content}</h1>
    </div>
  );
}
