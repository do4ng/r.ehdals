import ac from "../core/api/console";

const __name__ = {"name": "plugin-{YOUR_PLUGIN_NAME}"};

const ApiConsole = new ac(__name__.name);

export default function Main(props) {
    ApiConsole.apiLog("Hello, World!");
}