const child_process = require('child_process');

class backupController {
    async backup () {
        const credentials = {
            host: 'localhost',
            user: 'postgres',
            pass: '1234',
            port: 5432,
            db_name: 'micro_lab'
        }
        
        const dump_command = `pg_dump postgresql://${credentials.user}:${credentials.pass}@${credentials.host}:${credentials.port}/${credentials.db_name} > dump_${credentials.db_name}_${Date.now()}.sql`;
        const dump_result = child_process.execSync(dump_command);
        console.log(dump_result.toString());
        
        const restore_command = `pg_restore postgresql://${credentials.user}:${credentials.pass}@${credentials.host}:${credentials.port}/${credentials.db_name} < dump_${credentials.db_name}_${Date.now()}.sql`;
        const restore_result = child_process.execSync(dump_command);
        console.log(restore_result.toString());
    }
}
module.exports = new backupController ()