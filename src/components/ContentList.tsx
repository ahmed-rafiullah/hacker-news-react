import React from "react";
import styles from "./contentlist.module.css";
import styles2 from "./hackercard.module.css";
import HackerCard from "./HackerCard";
import HackerData from "./HackerData";
import { Item } from "../Interfaces/Item";
import { Link } from "react-router-dom";
import { host } from "../utils/host";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import fromUnixTime from 'date-fns/fromUnixTime'

interface ContentListProps {
  data: Item[];
}

export default function ContentList(props: ContentListProps) {
  return (
    <div className={styles.contentList}>
      {props.data.map((x) => {
        const timeAgo = formatDistanceToNow(fromUnixTime(x.time ?? 0))
       
        return (
          <div key={x.id} className={styles2.hackerCard}>
            <div>{x.score}</div>
            <div>
              <p style={{ marginBottom:'7px'}}>
                <span className='title'>
                  <a style={{color: '#34495e', textDecoration:'none'}} href={x.url}>{x.title}</a>
                </span>
                <span style={{fontSize: '15px', color:'#828282'}}>({host(x.url)})</span>
              </p>
              <p style={{color: '#828282', marginTop:'7px'}}>
                by <span><Link style={{color: '#828282'}} to={`/user/${x.by}`}>{x.by}</Link></span>
                <span>{timeAgo} ago</span>
                <span>| <Link style={{color: '#828282'}} to={`/item/${x.id}`}>{x.kids?.length ?? 0} comments</Link> </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}