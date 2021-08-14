import React, {  useState } from "react";
import cn from "classnames";
import { ReplyFill as Icon } from "react-bootstrap-icons";
import {Link} from 'react-router-dom';
import './FlipCard.css';
import {If, Then, Else} from 'react-if';

import gith from '../picture/github2.jpg';

function FlipCard({ card: { id, path, front, back } }) {
  const [showBack] = useState(false);
  
  var back_content=(
    <div className="card-body d-flex flex-column justify-content-around align-items-center">
       <div className="d-flex flex-column justify-content-center align-items-center">
        
           <p className="name">{front.title}</p>
           <p className="detail">{back.detail}</p>
        </div>
        <div className="icon">
            <Icon size={18}/>
        </div>
    </div>
  )

  var content=(
    <div
    tabIndex={id}
    className={cn("flip-card-outer", {hover: true})}
    >
    <div className={cn("flip-card-inner", { showBack })}>
      <div className="card front">
        <div className="image-container">
          <img src={front.image} alt={front.title} height={200}></img>
        
        </div>
        <div className="title-container">
              <p className="title">{front.title}</p>
        </div>
        <div className="card-body position-relative d-flex justify-content-center align-items-center">
          <div className="icon">
            <Icon size={18} />
          </div>
        </div>
      </div>
      
      <div className="card back">
      <If condition={path==='/'}>
          <Then>
            <div className="noLink" style={{paddingTop:75}}>
              {back_content}
            </div>
            
          </Then>
          <Else>
            <div className="github">
              <img src={gith} alt={'github'} height={100}></img>
            </div>
            {back_content}
          </Else>
      </If>
      </div>
    </div>
  </div>
  );

  return (
      <If condition={path==='/'}>
          <Then>
            {content}
          </Then>
          <Else>
          < Link to={{pathname: path}} target="_blank">
             {content}
            </Link>
          </Else>
      </If>
  );

}
export default FlipCard;
