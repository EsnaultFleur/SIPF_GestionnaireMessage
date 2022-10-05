package com.sipf.api.client;

import com.sipf.api.controller.ConstanteLienHttp;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class SipfApiUrlBuilder {
    public static final String ETIQUETTES = ConstanteLienHttp.ROOT + "/" + ConstanteLienHttp.ETIQUETTES + "/";
    public static final String MESSAGES = ConstanteLienHttp.ROOT + "/" + ConstanteLienHttp.MESSAGES + "/";

}
