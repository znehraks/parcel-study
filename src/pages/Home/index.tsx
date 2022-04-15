import React, { useCallback, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "../../components/Menu";
import Modal from "../../components/Modal";
import { Wrapper } from "./styles";
import { Scrollbars } from "react-custom-scrollbars";
import Item from "../../components/Item";
import dayjs from "dayjs";
import MentionComponent from "../../components/Mention";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

const Home = () => {
  const { data: DummyData, error } = useSWR("dummy", fetcher);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const scrollBarRef = useRef(null);
  const onScroll = useCallback(() => {}, []);
  const notify = useCallback((msg: string) => toast(msg), []);
  return (
    <Wrapper>
      <ToastContainer />
      {menuIsOpen && <Menu setIsOpen={setMenuIsOpen} />}
      <span
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
          notify("메뉴가 켜졌다네.");
        }}
      >
        메뉴가 나온다네
      </span>
      <hr />
      {modalIsOpen && <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />}
      <span
        onClick={() => {
          setModalIsOpen(!modalIsOpen);
          notify("모달이 켜졌다네.");
        }}
      >
        모달이 나온다네
      </span>
      <div>
        <Scrollbars autoHide ref={scrollBarRef} onScrollFrame={onScroll}>
          {DummyData?.map((elem, index) => (
            <Item
              key={index}
              value={elem.value}
              date={dayjs(elem.date).format("YYYY/MM/DD h:mm").toString()}
            />
          )) || []}
        </Scrollbars>
      </div>
      <div>
        <MentionComponent />
      </div>
    </Wrapper>
  );
};
export default Home;
