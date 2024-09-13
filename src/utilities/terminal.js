export function commandLine(input, cwd) {
  switch (input) {
    case "ls":
      return `Directory listing
      `;
    case "pwd":
      return `Current Workin Directory:
      ${cwd}
      `;
    case "help":
      return `Available commands are: 
        ls, pwd
        `;
    default:
      return `Command not found - type help
      `;
  }
}
