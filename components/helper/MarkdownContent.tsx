// Global
import { classnames } from '@/tailwindcss-classnames';
import ReactMarkdown from 'react-markdown';
import type { PagePartial } from '@/interfaces/page-info';
import getSectionId from '@/lib/section-id';

type MarkdownContentProps = {
  partials: PagePartial[];
  idSeed?: string;
};

const MarkdownContent = ({ partials }: MarkdownContentProps): JSX.Element => (
  <div>
    {partials.map((item, i) => (
      <div
        className={classnames('prose', {
          'mb-16': i !== partials.length,
        })}
        key={i}
        id={getSectionId(item.title)}
      >
        <ReactMarkdown>{item.content}</ReactMarkdown>
      </div>
    ))}
  </div>
);

export default MarkdownContent;
