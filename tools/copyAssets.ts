import shell from 'shelljs';

// Copy all the view templates
shell.cp('-R', 'src/public', 'dist/');