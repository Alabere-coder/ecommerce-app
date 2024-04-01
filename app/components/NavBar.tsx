"use client";

import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { IconSearch } from "@arco-design/web-react/icon";
import enUS from "@arco-design/web-react/es/locale/en-US";
import {
  Button,
  Notification,
  ConfigProvider,
  Popover,
  Form,
  Input,
  Select,
  Modal,
  Empty,
} from "@arco-design/web-react";
import Link from "next/link";
import DrawerComponent from "./Drawer/Draawer";
const InputSearch = Input.Search;

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <ConfigProvider locale={enUS}>
      <div className="sticky top-0 mx-10 max-sm:mx-2  border-b-2 bg-white duration-200 z-40">
        <div className=" py-4 flex justify-between items-center">
          <div className="max-sm:hidden max-md:hidden max-lg:hidden flex items-center gap-4">
            <ul className="flex items-center gap-4">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block px-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <Link
              href="#"
              className="text-primary ma font-semibold tracking-widest text-xl uppercase sm:text-3xl"
            >
              Empire
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative place-content-end max-md:hidden">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 text-gray-800 rounded-full py-2 px-4 w-32 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:w-52 hover:w-52"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary" />
              </div>
            </div>

            <div className="md:hidden">
              <Button onClick={() => setVisible(true)} type="text">
                <IconSearch className="text-lg text-gray-400" />
              </Button>
              <Modal
                title={
                  <InputSearch
                    searchButton
                    defaultValue="Search content"
                    placeholder="Enter keyword to search"
                    style={{ width: "94%", marginRight: 40 }}
                  />
                }
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                autoFocus={false}
                focusLock={true}
                className="w-[96%]"
              >
                <div>
                  <Empty />
                </div>
              </Modal>
            </div>

            <Button
              onClick={() =>
                Notification.warning({
                  title: "Notification",
                  content: "You Need to Log in to continue",
                })
              }
              type="text"
            >
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-3 h-3 p-1 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                <FaPlus />
              </div>
            </Button>
            <div>
              <Popover
                title="Log-In To Continue"
                className="rounded-2xl"
                style={{ borderRadius: "20px" }}
                content={
                  <Form layout="vertical">
                    <Form.Item label="First-Name" field="first">
                      <Input placeholder="Firstname is required" />
                    </Form.Item>
                    <Form.Item label="Last-Name" field="last">
                      <Input placeholder="Lastname is Reuired" />
                    </Form.Item>
                    <Form.Item label="Email" field="email">
                      <Input placeholder="Lastname is Reuired" />
                    </Form.Item>
                    <Form.Item label="Hometown" field="hometown">
                      <Select
                        placeholder="Plear select"
                        options={["Lagos", "Abuja", "Ilorin"]}
                      />
                    </Form.Item>
                  </Form>
                }
              >
                <Button type="secondary" shape="round" size="large">
                  Log-In
                </Button>
              </Popover>
            </div>
            <div className="lg:hidden">
              <DrawerComponent />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Navbar;
