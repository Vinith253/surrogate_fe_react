import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import "./card.scss";
import ApprovalRate from "../../../../assets/icons/approval_rate_icon.svg";

function DashboardCard(props: {
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  value:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  more: any;
  image: any;
}) {
  return (
    <div className="total-value-card">
      <div className="upper-half">
        <div className="image-icon-box">
          <img src={props.image} />
        </div>
        <div className="card-text-area">
          <text className="card-text-heading">{props.title}</text>
          <text className="card-text-value">{props.value}</text>
        </div>
      </div>
      {props.more && (
        <div className="lower-div">
          <li onClick={() => console.log("more clicked")} className="more-text">
            More
          </li>
        </div>
      )}
    </div>
  );
}

export default DashboardCard;
