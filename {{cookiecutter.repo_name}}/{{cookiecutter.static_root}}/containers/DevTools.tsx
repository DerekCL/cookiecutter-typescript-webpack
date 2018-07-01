import * as React from "react";
import { createDevTools } from "redux-devtools";

// Monitors are separate packages, and you can make a custom one
import Dispatcher from "redux-devtools-dispatch";
import DockMonitor from "redux-devtools-dock-monitor";
import LogMonitor from "redux-devtools-log-monitor";
import MultipleMonitors from "redux-devtools-multiple-monitors";
import SliderMonitor from "redux-slider-monitor";

const REDUX_DEV_TOOLS_VISIBLE = false;

// createDevTools takes a monitor and produces a DevTools component
export default createDevTools(
    <DockMonitor
        toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-q"
        changeMonitorKey="ctrl-m"
        defaultPosition="right"
        defaultIsVisible={REDUX_DEV_TOOLS_VISIBLE}
    >
        <MultipleMonitors>
            <LogMonitor theme="nicinabox" />
            <Dispatcher />
        </MultipleMonitors>
        <SliderMonitor keyboardEnabled />
    </DockMonitor>,
);
