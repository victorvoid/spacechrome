(ns figwheel.connect.build-popup (:require [chromex-sample.popup] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "popup", :websocket-url "ws://localhost:6888/figwheel-ws"})

