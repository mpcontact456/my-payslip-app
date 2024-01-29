package com.mycompany.filedownload;

import android.content.Intent;
import android.net.Uri;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class FileDownload extends Plugin {

    @PluginMethod
    public void downloadFile(PluginCall call) {
        String fileUrl = call.getString("fileUrl");

        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(fileUrl));
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getContext().startActivity(intent);

        call.resolve();
    }
}
