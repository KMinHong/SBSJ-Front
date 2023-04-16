import {
        REQUEST_BOARD_LIST_TO_SPRING,
        REQUEST_BOARD_TO_SPRING
} from './mutation-types'
    REQUEST_QNA_BOARD_LIST_TO_SPRING,

export default {
    [REQUEST_BOARD_LIST_TO_SPRING] (state, passingData) {
        state.boards = passingData
export default { 
    [REQUEST_QNA_BOARD_LIST_TO_SPRING] (state, passingData) {
        state.qnaBoards = passingData
    },
    
    [REQUEST_BOARD_TO_SPRING] (state, passingData) {
        state.board = passingData
    },
}