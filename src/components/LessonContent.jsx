import Mermaid from './Mermaid.jsx';
import { renderInline } from '../utils/textFormat.jsx';

export default function LessonContent({ sections }) {
  return (
    <div className="lesson-content">
      {sections.map((section, i) => {
        switch (section.type) {
          case 'p':
            return <p key={i}>{renderInline(section.text)}</p>;
          case 'callout':
            return (
              <div key={i} className={`callout callout-${section.tone || 'info'}`}>
                {renderInline(section.text)}
              </div>
            );
          case 'list':
            return (
              <ul key={i}>
                {section.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case 'table':
            return (
              <div key={i} className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {section.headers.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>{renderInline(cell)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'diagram':
            return <Mermaid key={i} chart={section.mermaid} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
