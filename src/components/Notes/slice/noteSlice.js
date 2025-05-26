import { createSlice } from '@reduxjs/toolkit'
import { NoteStatus } from '../../Note/config/NoteStatus';
import noNotes from "../../../assets/DetectiveCheckFootprint.png";
import darkNoNotesImage from '../../../assets/darkNoNotesImage.png'

export const noteSlice = createSlice({
    name: 'noteList',
    initialState: {
        notes: JSON.parse(localStorage.getItem('notes')),
        visibleNotes: JSON.parse(localStorage.getItem('notes')),
        baseVisibleNotes: JSON.parse(localStorage.getItem('notes')),
        filter: "All",
        noNotesImage: noNotes,
        undo: false,
        lastDeletedVisibleNotes: null,
        lastDeletedNotes: null
    },
    reducers: {
        showAll: (state) => {
            state.visibleNotes = state.notes;
            state.baseVisibleNotes = state.notes.map(note => ({ ...note }));
            state.filter = "All"
        },
        showCompleted: (state) => {
            const filtered = state.notes.filter(note => note.status === NoteStatus.DONE);
            state.visibleNotes = filtered;
            state.baseVisibleNotes = filtered.map(note => ({ ...note }));
            state.filter = "Incomplete"
        },
        showIncompleted: (state) => {
            const filtered = state.notes.filter(note => note.status === NoteStatus.NEW);
            state.visibleNotes = filtered;
            state.baseVisibleNotes = filtered.map(note => ({ ...note }));
            state.filter = "Complete"
        },
        addNote: (state, action) => {
            if(state.notes === null){
                state.notes = [];
                state.visibleNotes = [];
                localStorage.setItem('notes', JSON.stringify(state.notes));
            }
            const newNote = action.payload;
            state.notes.push(newNote);
            if ((state.filter === 'All') || 
                (state.filter === 'Complete' && newNote.status === NoteStatus.DONE) || 
                (state.filter === 'Incomplete' && newNote.status === NoteStatus.NEW)) {
                state.visibleNotes.push(newNote);
            }
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        removeNote: (state, action) => {
            state.lastDeletedNotes = state.notes.map(note => ({ ...note }));
            state.lastDeletedVisibleNotes = state.visibleNotes.map(note => ({ ...note }));
            for(let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === state.visibleNotes[action.payload].id) {
                    state.notes.splice(i, 1);
                    break;
                }
            }
            state.visibleNotes.splice(action.payload, 1);
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        editNote: (state, action) => {
            if(action.payload.index < 0 || action.payload.index >= state.notes.length) {
                return;
            }
            state.visibleNotes[action.payload.index] = {
                ...state.visibleNotes[action.payload.index],
                title: action.payload.data.title,
                description: action.payload.data.description,
                deadline: action.payload.data.deadline
            }
            
            for(let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === state.visibleNotes[action.payload.index].id) {
                    state.notes[i] = state.visibleNotes[action.payload.index];
                    break;
                }
            }
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        filterOnType: (state, action) => {
            const query = action.payload.toLowerCase();
            if (query === '') {
                state.visibleNotes = state.baseVisibleNotes.map(note => ({ ...note }));
            } else {
                state.visibleNotes = state.baseVisibleNotes.filter(note =>
                    note.title.toLowerCase().includes(query)
                );
            }
        },
        changeTaskStatus: (state, action) => {                        
            for(let i = 0; i < state.visibleNotes.length; i++) {
                if(state.visibleNotes[i].id === action.payload.id) {
                    state.visibleNotes[i].status = state.visibleNotes[i].status === NoteStatus.DONE ? NoteStatus.NEW : NoteStatus.DONE;
                    break;
                }
            }
            for(let i = 0; i < state.notes.length; i++) {
                if(state.notes[i].id === action.payload.id) {
                    state.notes[i].status = state.notes[i].status === NoteStatus.DONE ? NoteStatus.NEW : NoteStatus.DONE;
                    break;
                }
            }
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        changeNoNotesImage: (state) => {
            state.noNotesImage = (state.noNotesImage === noNotes) ? darkNoNotesImage : noNotes;
        },
        showUndo: (state, action) => {
            state.undo = action.payload;
        },
        undoRemoving: (state) => {
            state.notes = state.lastDeletedNotes.map(note => ({ ...note }));;
            state.visibleNotes = state.lastDeletedVisibleNotes.map(note => ({ ...note }));;
            localStorage.setItem('notes', JSON.stringify(state.notes));
            state.lastDeletedNotes = null;
            state.lastDeletedVisibleNotes = null;
        }
    }
})

export const { showAll, showCompleted, showIncompleted, addNote, removeNote, editNote, filterOnType, changeTaskStatus, changeNoNotesImage, showUndo, undoRemoving } = noteSlice.actions
export default noteSlice.reducer