(ns figwheel.connect.build-background (:require [chromex-sample.background] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "background", :websocket-url "ws://localhost:6888/figwheel-ws"})

