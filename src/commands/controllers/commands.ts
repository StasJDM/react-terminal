import { ETerminalMessage } from '../../constants/terminalMessages';
import { fileCommands, fileCommandsController } from './fileCommandsController';

export const CommandsComntroller = {
  runCommand: (command: string): string => {
    if (!command) return '';
    const [firstCommand, ...restCommands] = command.split(' ');

    switch (true) {
      case fileCommands.includes(firstCommand):
        return fileCommandsController(firstCommand, restCommands);
      default:
        return ETerminalMessage.CommandNotFound;
    }
  },
};
