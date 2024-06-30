export default function MyTitle({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <h1 className="font-bold text-nice-red">
      {children}
    </h1>
  );
}
