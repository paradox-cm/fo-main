interface CodeSnippetProps {
  text: string
  language?: string
}

export function CodeSnippet({ text, language = "js" }: CodeSnippetProps) {
  return (
    <div className="rounded-md bg-[#1E1E1E] p-4">
      <pre className="overflow-x-auto">
        <code className={`language-${language} text-sm text-white`}>{text}</code>
      </pre>
    </div>
  )
}
