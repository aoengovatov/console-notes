const yargs = require("yargs");
const pkg = require("./package.json");
const {
    addNote,
    printNotes,
    deleteNoteById,
    editNoteById,
} = require("./notes.controller");

yargs.version(pkg.version);

yargs.command({
    command: "add",
    describe: "Add new note to list",
    builder: {
        title: {
            type: "string",
            describe: "Note title",
            demandOption: true,
        },
    },
    handler({ title }) {
        addNote(title);
    },
});

yargs.command({
    command: "remove",
    describe: "Remove note by id",
    builder: {
        id: {
            type: "string",
            describe: "Note ID",
            demandOption: true,
        },
    },
    handler({ id }) {
        deleteNoteById(id);
    },
});

yargs.command({
    command: "edit",
    describe: "Edit note by id",
    builder: {
        id: {
            type: "string",
            describe: "Note ID",
            demandOption: true,
        },
        title: {
            type: "string",
            describe: "Note title",
            demandOption: true,
        },
    },
    handler({ id, title }) {
        editNoteById(id, title);
    },
});

yargs.command({
    command: "list",
    describe: "Print all notes",
    async handler() {
        printNotes();
    },
});

yargs.parse();
