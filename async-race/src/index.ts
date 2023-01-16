import { Button } from "./components/buttons/index";
import { ContainerHr } from "./components/container-hr/index";
import { Garage } from "./garage/index";
import { Winners } from "./winners/index";

const body = document.body;
const container = ContainerHr([Button('garage', () => Garage()), Button('winners', () => Winners())]);
body.append(container);