import type { SolutionDictionary } from "../../i18n";

export interface StaticContentProps {
  content: SolutionDictionary["generatedContent"];
}

export default function StaticContent({ content }: StaticContentProps) {
  const createHtml = (text: string) => ({
    __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
  });

  return (
    <hgroup className="space-y-4 min-h-[300px]">
      <h3 className="text-lg font-semibold">{content.title}</h3>
      <div
        className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground"
        style={{ whiteSpace: "pre-line" }} // This is the key fix
        dangerouslySetInnerHTML={createHtml(content.description)}
      />
    </hgroup>
  );
}
