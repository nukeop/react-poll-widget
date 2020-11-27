import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Icon } from "semantic-ui-react";

import { PollStep } from "../../types";
import WizardPanel from "../WizardPanel";
import './styles.scss';

export type StepsListProps = {
  steps?: PollStep[];
};

const StepsListItem: React.FC<PollStep> = ({
  id, title, type
}) => <Draggable key={id} draggableId={id}>
    {
      (provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='steps-list-item'
        >
          <WizardPanel>
            <Icon name='ellipsis vertical' />
            <span className='title'>
              {title}
            </span>
            <span className='type'>
              {type}
            </span>
          </WizardPanel>
        </div>
      )
    }
  </Draggable>

const StepsList: React.FC<StepsListProps> = ({
  steps = []
}) => <DragDropContext>
    <Droppable droppableId='steps-list'>
      {
        (provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {steps.map(step => <StepsListItem {...step} />)}
          </div>
        )
      }
    </Droppable>
  </DragDropContext>

export default StepsList;