"""
Usage:
    python make_qr.py https://yourusername.github.io/grad-site/

Produces qr-code.png in the same folder, colored to match the site.
Regenerate any time the URL changes (e.g. if you move hosts).
"""

import sys
import qrcode

if len(sys.argv) != 2:
    print("Usage: python make_qr.py <url>")
    sys.exit(1)

url = sys.argv[1]

qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_M,
    box_size=12,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="#1C1B19", back_color="#FFFFFF")
img.save("qr-code.png")
print(f"Saved qr-code.png for {url}")
