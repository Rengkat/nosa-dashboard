import { Fragment } from "react";
import { links } from "../_utils/page";
import Link from "next/link";
import { ActiveLink } from "../_utils/ActiveLink";

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      {links.map((link) => {
        return (
          <Fragment key={link.name}>
            <ActiveLink href={link.link} name={link.name} icon={link.icon} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Sidebar;
