'use client'

import { useBoardStore } from '@/store/BoardStore';
import { useEffect } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import Column from './Column';

function Board() {
  const [board,getBoard] = useBoardStore((state)=> [
  state.board,
  state.getBoard]);

  useEffect(()=> {
    getBoard();


},[getBoard]);

const handleOnDragEnd = (result: DropResult) => {
  // Your drag end logic here
};

return (
  <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId='board' direction='horizontal' type='column'>
        {(provided) => (
            <div
            className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
            {...provided.droppableProps}
            ref={provided.innerRef}
            >{

              
              Array.from(board.columns.entries()).map(([id, column], index)=>(
               <Column
               key = {id}
               id = {id}
               todos = {column.todos}
               index = {index}
               /> 

              ))
                 
}</div>
        )}
    </Droppable>
  </DragDropContext>
  );

  
}

export default Board
