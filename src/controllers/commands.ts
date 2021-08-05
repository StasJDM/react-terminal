export const CommandsComntroller = {
  runCommand: (command: string): string => {
    if (!command) return '';
    return command.split(' ').reduce((p, n) => p + ' >>> ' + n);
  },
};
