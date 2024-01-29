import Foundation
import Capacitor

@objc(FileDownload)
public class FileDownload: CAPPlugin {

    @objc func downloadFile(_ call: CAPPluginCall) {
        guard let fileUrl = call.getString("fileUrl"),
              let url = URL(string: fileUrl) else {
            call.reject("Invalid file URL")
            return
        }

        DispatchQueue.main.async {
            UIApplication.shared.open(url, options: [:]) { success in
                if success {
                    call.resolve()
                } else {
                    call.reject("Failed to open file")
                }
            }
        }
    }
}
