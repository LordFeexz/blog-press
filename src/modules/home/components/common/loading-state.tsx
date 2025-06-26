export default function LoadingState({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
      <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-primary"></div>
      <div className="mt-4 text-muted-foreground">{text}</div>
    </div>
  );
}
