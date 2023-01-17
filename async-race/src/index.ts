import { Button } from "./components/buttons/index";
import { ContainerHr } from "./components/container-hr/index";
import { Table } from "./layouts/winners/index";

import './style.css';

const body = document.body;
const container = ContainerHr([Button('to garage', () => {}), Button('to winners', () => Table())]);
body.append(container);