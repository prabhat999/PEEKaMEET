import React, { useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Menu1 from "../Menu/Menu1";
import "./NotesList.css";

function NotesList() {
  const [readMore, setreadMore] = useState(true);
  const readMoreHandler = () => {
    setreadMore(!readMore);
  };

  const availablenote = useSelector((state) => state.Notes.initials);
  let pagecount = 1;
  const initial = {
    items: availablenote.slice(0, 3),
    hasMore: true,
    pagecount: pagecount,
  };
  const [state, setstate] = useState(initial);
  const fetchMoreData = () => {
    if (initial.items.length * state.pagecount === availablenote.length) {
      setstate((prevState) => ({
        ...prevState,
        hasMore: false,
      }));
      return;
    }
    setTimeout(() => {
      setstate((prevState) => ({
        ...prevState,
        items: state.items.concat(
          availablenote.slice(state.pagecount * 3, state.pagecount * 3 + 3)
        ),
        pagecount: state.pagecount + 1,
      }));
    }, 700);
  };
  return (
    <>
      <div className="fullnote_container">
        <InfiniteScroll
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<h4>You have seen it all</h4>}
        >
          {state.items.map((note1) => {
            return (
              <>
                <div className="container fullnote">
                  <div className="container threedots">
                    {<Menu1 id={note1.id} />}
                  </div>
                  <p onClick={readMoreHandler}>
                    {readMore ? note1.text.slice(0, 300) : note1.text}
                    <p className="moreless">
                      {readMore
                        ? note1.text.length > 300
                          ? "More"
                          : ""
                        : "Less"}
                    </p>
                  </p>
                  <div className="text-muted datetime">
                    <span>{note1.date}</span>
                    <span>{note1.time}</span>
                  </div>
                </div>
              </>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default NotesList;
