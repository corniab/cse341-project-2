import shell from 'shelljs';

// Copy all the view templates
shell.cp('-R', 'src/public', 'dist/');
shell.cp('-R', '.env', 'dist/');
