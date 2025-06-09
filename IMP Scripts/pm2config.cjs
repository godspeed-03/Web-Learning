module.exports = {
  apps: [
    {
      name: 'next',                       // Frontend app name
      cwd: './Frontend',                  // Set the working directory
      script: 'npm',                      // Use npm as the script to run
      args: 'run dev',                    // Command to run for the frontend app
      max_restarts: 5,                    // Max restarts for failure
      restart_delay: 1000,                // Delay between restarts
      watch: true,                        // Enable file watching for automatic restart
      ignore_watch: [                    // Files/folders to ignore while watching
        'node_modules',
        'logs',
      ],
    },
    {
      name: 'admin',                       // Frontend app name
      cwd: './Admin',                  // Set the working directory
      script: 'npm',                      // Use npm as the script to run
      args: 'run dev',                    // Command to run for the frontend app
      max_restarts: 5,                    // Max restarts for failure
      restart_delay: 1000,                // Delay between restarts
      watch: true,                        // Enable file watching for automatic restart
      ignore_watch: [                    // Files/folders to ignore while watching
        'node_modules',
        'logs',
      ],
    },
    {
      name: 'node',                       // Backend app name
      cwd: './Backend',                   // Set the working directory
      script: 'npm',                      // Use npm as the script to run
      args: 'run dev',                    // Command to run for the backend app
      // instances: 2,                       // Number of instances for the backend
      // exec_mode: 'cluster', 
      merge_logs: true,              // Run the backend in cluster mode
      env: {
        NODE_ENV: 'dev',                  // Set the environment variable for dev
      },
      max_restarts: 5,                    // Max restarts for failure
      restart_delay: 1000,                // Delay between restarts
      watch: true,                        // Enable file watching for automatic restart
      ignore_watch: [                    // Files/folders to ignore while watching
        'node_modules',
        'logs',
      ],
      out_file: '../logs/output.log',    // All standard logs go here
      error_file: '../logs/error.log',
    },
  ],
};
