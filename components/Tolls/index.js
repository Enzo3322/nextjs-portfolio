export const ToolsComponent = ({ tools }) => {
  if (!tools) return null;

  return (
    <ul>
      {tools.map((tool, i) => (
        <li key={i}>{tool.name}</li>
      ))}
    </ul>
  );
};
