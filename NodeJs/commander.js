//Using commander library to create a CLI to do file based tasks like counting words, sentences and lines in a file.

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description(' CLI to do file based tasks')
    .version('0.8.0'); 

program
    .command ('count_words')
    .description('Count the number of words in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs. readFile (file, "utf8", (err,data) => {
            if (err) {
                console. log(err);
            } else {
                total = 0
                for(let i = 0; i < data.length; i++){
                    if(data[i] === " "){
                        total++;
                    }
                }console.log(`There are ${total+1} words in ${file}`)
            }
        });
    });

program
    .command ('count_sentences')
    .description('Count the number of sentences in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs. readFile (file, "utf8", (err,data) => {
            if (err) {
                console. log(err);
            } else {
                let total = 0;
                for(let i = 0; i < data.length; i++){
                    if (data[i] === '.'){
                        total++;
                    }
                }
                console.log(`There are ${total} sentences in ${file}`);
            }
        });
    });

program
    .command ('count_lines')
    .description('Count the number of lines in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs. readFile (file, "utf8", (err,data) => {
            if (err) {
                console. log(err);
            } else {
                let total = 0;
                for(let i = 0; i < data.length; i++){
                    if (data[i] === "\n"){
                        total++;
                    }
                }console.log(`There are ${total+1} lines in ${file}`);
            }
        });
    });

program.parse();