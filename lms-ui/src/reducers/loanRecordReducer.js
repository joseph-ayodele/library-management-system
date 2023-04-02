import * as actionTypes from '../actions/ActionTypes';

const initialState = {
    loanRecords: [],
};

const loanRecordReducer = (state = initialState, action) => {
    switch (action.type) { 
        case actionTypes.READ_LOAN_RECORDS:
            return {
                ...state,
                loanRecords: action.payload
            };
        case actionTypes.UPDATE_LOAN_RECORD: {
            const updatedLoanRecords = [...state.loanRecords];
            updatedLoanRecords[action.payload.index] = action.payload.data;
            return {
                ...state,
                loanRecords: updatedLoanRecords
            };
        }
        case actionTypes.ADD_LOAN_RECORD:
            return {
                ...state,
                loanRecords: [...state.loanRecords, action.payload]
            };
        case actionTypes.DELETE_LOAN_RECORD:
            return {
                ...state,
                loanRecords: state.loanRecords.filter(loan => loan.id !== action.payload)
            };
        case actionTypes.RESET_LOAN_RECORD_UPDATED: {
            return {
                ...state,
                loanRecordUpdated: false
            };
        }
        default:
            return state;
    }
};

export default loanRecordReducer;