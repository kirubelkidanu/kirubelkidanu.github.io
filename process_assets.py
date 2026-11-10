import os
from PIL import Image, ImageDraw, ImageFont

SOURCE_DIR = r"C:\Users\kirub\Music\portfolio"
TARGET_DIR = r"C:\Users\kirub\Music\portfolio\src\assets\projects"

font_reg = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 14)
font_bold = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 14)
font_md = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 15)
font_sm = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 13)
font_xs = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 12)
font_badge = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 10)

results = []

def record(path, original_name, orig_size, w, h, usage):
    new_size = os.path.getsize(path)
    results.append({
        "path": os.path.relpath(path, r"C:\Users\kirub\Music\portfolio"),
        "original_file": original_name,
        "original_size": orig_size,
        "new_size": new_size,
        "dimensions": f"{w}x{h}",
        "usage": usage
    })

def sanitize_erp(img):
    copy_img = img.copy()
    draw = ImageDraw.Draw(copy_img)
    h = copy_img.height
    # Clear profile text and badge area from x=78 to 295
    draw.rectangle([78, h - 80, 295, h - 20], fill=(15, 23, 42))
    draw.text((88, h - 68), "System Admin", font=font_bold, fill=(241, 245, 249))
    draw.rounded_rectangle([186, h - 68, 232, h - 52], radius=4, fill=(139, 92, 246))
    draw.text((192, h - 67), "ADMIN", font=font_badge, fill=(255, 255, 255))
    draw.text((88, h - 48), "admin@enterprise.local", font=font_xs, fill=(148, 163, 184))
    return copy_img

print("Executing final polished asset generation pipeline...")

# ------------------------------------------------------------------
# 1. Construction ERP & Inventory Management
# ------------------------------------------------------------------
erp_dir = os.path.join(TARGET_DIR, "construction-erp")

# dashboard.png
dash_path = os.path.join(SOURCE_DIR, "dashboard.png")
orig_dash_size = os.path.getsize(dash_path)
with Image.open(dash_path) as orig_dash:
    dash_clean = sanitize_erp(orig_dash)
    
    # 16:9 preview (1920x1080)
    preview = dash_clean.crop((0, 0, 1920, 1080))
    p_path = os.path.join(erp_dir, "preview.webp")
    preview.save(p_path, "WEBP", quality=84, method=6)
    record(p_path, "dashboard.png", orig_dash_size, 1920, 1080, "Portfolio Card Preview (16:9)")
    
    # Thumbnail (800x450)
    thumb = preview.resize((800, 450), Image.Resampling.LANCZOS)
    t_path = os.path.join(erp_dir, "preview-thumb.webp")
    thumb.save(t_path, "WEBP", quality=82, method=6)
    record(t_path, "dashboard.png", orig_dash_size, 800, 450, "Thumbnail (16:9)")
    
    # Full case study
    f_path = os.path.join(erp_dir, "dashboard.webp")
    dash_clean.save(f_path, "WEBP", quality=84, method=6)
    record(f_path, "dashboard.png", orig_dash_size, dash_clean.width, dash_clean.height, "Case Study Full Dashboard")

# item.png
item_path = os.path.join(SOURCE_DIR, "item.png")
orig_item_size = os.path.getsize(item_path)
with Image.open(item_path) as orig_item:
    item_clean = sanitize_erp(orig_item)
    f_path = os.path.join(erp_dir, "item-master.webp")
    item_clean.save(f_path, "WEBP", quality=84, method=6)
    record(f_path, "item.png", orig_item_size, item_clean.width, item_clean.height, "Case Study Item Master Catalog")

# transaction.png
tx_path = os.path.join(SOURCE_DIR, "transaction.png")
orig_tx_size = os.path.getsize(tx_path)
with Image.open(tx_path) as orig_tx:
    tx_clean = sanitize_erp(orig_tx)
    f_path = os.path.join(erp_dir, "transactions.webp")
    tx_clean.save(f_path, "WEBP", quality=84, method=6)
    record(f_path, "transaction.png", orig_tx_size, tx_clean.width, tx_clean.height, "Case Study Transactions Ledger")

# report.png
rep_path = os.path.join(SOURCE_DIR, "report.png")
orig_rep_size = os.path.getsize(rep_path)
with Image.open(rep_path) as orig_rep:
    rep_clean = sanitize_erp(orig_rep)
    f_path = os.path.join(erp_dir, "stock-ledger.webp")
    rep_clean.save(f_path, "WEBP", quality=82, method=6)
    record(f_path, "report.png", orig_rep_size, rep_clean.width, rep_clean.height, "Case Study Stock Trial Balance Ledger")

print("Project 1: Construction ERP completed.")

# ------------------------------------------------------------------
# 2. Right Choice Kids Therapy Website
# ------------------------------------------------------------------
rcw_dir = os.path.join(TARGET_DIR, "right-choice-website")

# hometherapy.png
ht_path = os.path.join(SOURCE_DIR, "hometherapy.png")
orig_ht_size = os.path.getsize(ht_path)
with Image.open(ht_path) as orig_ht:
    # 16:9 preview (1920x1080)
    preview = orig_ht.crop((0, 0, 1920, 1080))
    p_path = os.path.join(rcw_dir, "preview.webp")
    preview.save(p_path, "WEBP", quality=84, method=6)
    record(p_path, "hometherapy.png", orig_ht_size, 1920, 1080, "Portfolio Card Preview (16:9)")
    
    # Thumbnail (800x450)
    thumb = preview.resize((800, 450), Image.Resampling.LANCZOS)
    t_path = os.path.join(rcw_dir, "preview-thumb.webp")
    thumb.save(t_path, "WEBP", quality=82, method=6)
    record(t_path, "hometherapy.png", orig_ht_size, 800, 450, "Thumbnail (16:9)")
    
    # Full homepage
    f_path = os.path.join(rcw_dir, "homepage.webp")
    orig_ht.save(f_path, "WEBP", quality=82, method=6)
    record(f_path, "hometherapy.png", orig_ht_size, orig_ht.width, orig_ht.height, "Case Study Full Homepage")

# about.png
about_path = os.path.join(SOURCE_DIR, "about.png")
orig_about_size = os.path.getsize(about_path)
with Image.open(about_path) as orig_about:
    f_path = os.path.join(rcw_dir, "about.webp")
    orig_about.save(f_path, "WEBP", quality=82, method=6)
    record(f_path, "about.png", orig_about_size, orig_about.width, orig_about.height, "Case Study About Us")

# services.png
srv_path = os.path.join(SOURCE_DIR, "services.png")
orig_srv_size = os.path.getsize(srv_path)
with Image.open(srv_path) as orig_srv:
    f_path = os.path.join(rcw_dir, "services.webp")
    orig_srv.save(f_path, "WEBP", quality=82, method=6)
    record(f_path, "services.png", orig_srv_size, orig_srv.width, orig_srv.height, "Case Study Services")

print("Project 2: Right Choice Website completed.")

# ------------------------------------------------------------------
# 3. Furniture eCommerce & POS
# ------------------------------------------------------------------
furn_dir = os.path.join(TARGET_DIR, "furniture-ecommerce")

# homefurniture.png
hf_path = os.path.join(SOURCE_DIR, "homefurniture.png")
orig_hf_size = os.path.getsize(hf_path)
with Image.open(hf_path) as orig_hf:
    # Crop WP admin bar (top 36px)
    hf_clean = orig_hf.crop((0, 36, orig_hf.width, orig_hf.height))
    
    # 16:9 preview (1920x1080)
    preview = hf_clean.crop((0, 0, 1920, 1080))
    p_path = os.path.join(furn_dir, "preview.webp")
    preview.save(p_path, "WEBP", quality=84, method=6)
    record(p_path, "homefurniture.png", orig_hf_size, 1920, 1080, "Portfolio Card Preview (16:9)")
    
    # Thumbnail (800x450)
    thumb = preview.resize((800, 450), Image.Resampling.LANCZOS)
    t_path = os.path.join(furn_dir, "preview-thumb.webp")
    thumb.save(t_path, "WEBP", quality=82, method=6)
    record(t_path, "homefurniture.png", orig_hf_size, 800, 450, "Thumbnail (16:9)")
    
    # Full homepage
    f_path = os.path.join(furn_dir, "homepage.webp")
    hf_clean.save(f_path, "WEBP", quality=82, method=6)
    record(f_path, "homefurniture.png", orig_hf_size, hf_clean.width, hf_clean.height, "Case Study Full Homepage")

# shop.png
shop_path = os.path.join(SOURCE_DIR, "shop.png")
orig_shop_size = os.path.getsize(shop_path)
with Image.open(shop_path) as orig_shop:
    # Crop WP admin bar (top 36px)
    shop_clean = orig_shop.crop((0, 36, orig_shop.width, orig_shop.height))
    f_path = os.path.join(furn_dir, "shop.webp")
    shop_clean.save(f_path, "WEBP", quality=82, method=6)
    record(f_path, "shop.png", orig_shop_size, shop_clean.width, shop_clean.height, "Case Study Shop Catalog")

# checkoutfurniture.png
cf_path = os.path.join(SOURCE_DIR, "checkoutfurniture.png")
orig_cf_size = os.path.getsize(cf_path)
with Image.open(cf_path) as orig_cf:
    # Crop WP admin bar (top 36px)
    cf_clean = orig_cf.crop((0, 36, orig_cf.width, orig_cf.height))
    draw_cf = ImageDraw.Draw(cf_clean)
    
    # 1. Email input text at Y=419..446, X=75..450
    draw_cf.rectangle([75, 419, 450, 446], fill=(255, 255, 255))
    draw_cf.text((80, 424), "customer@example.com", font=font_reg, fill=(107, 114, 128))
    
    # 2. Billing address card at Y=528..590, X=75..600
    draw_cf.rectangle([75, 528, 600, 590], fill=(255, 255, 255))
    draw_cf.text((80, 534), "Verified Customer", font=font_bold, fill=(17, 24, 39))
    draw_cf.text((80, 560), "Addis Ababa, Ethiopia • +251 90 ••• ••••", font=font_sm, fill=(107, 114, 128))
    
    f_path = os.path.join(furn_dir, "checkout.webp")
    cf_clean.save(f_path, "WEBP", quality=84, method=6)
    record(f_path, "checkoutfurniture.png", orig_cf_size, cf_clean.width, cf_clean.height, "Case Study Sanitized Checkout")

print("Project 3: Furniture eCommerce completed.")

# ------------------------------------------------------------------
# 4. Kira Store WooCommerce
# ------------------------------------------------------------------
kira_dir = os.path.join(TARGET_DIR, "kira-store")

# homepage.png
hp_path = os.path.join(SOURCE_DIR, "homepage.png")
orig_hp_size = os.path.getsize(hp_path)
with Image.open(hp_path) as orig_hp:
    # 16:9 preview (1920x1080)
    preview = orig_hp.crop((0, 0, 1920, 1080))
    p_path = os.path.join(kira_dir, "preview.webp")
    preview.save(p_path, "WEBP", quality=84, method=6)
    record(p_path, "homepage.png", orig_hp_size, 1920, 1080, "Portfolio Card Preview (16:9)")
    
    # Thumbnail (800x450)
    thumb = preview.resize((800, 450), Image.Resampling.LANCZOS)
    t_path = os.path.join(kira_dir, "preview-thumb.webp")
    thumb.save(t_path, "WEBP", quality=82, method=6)
    record(t_path, "homepage.png", orig_hp_size, 800, 450, "Thumbnail (16:9)")
    
    # Full homepage
    f_path = os.path.join(kira_dir, "homepage.webp")
    orig_hp.save(f_path, "WEBP", quality=82, method=6)
    record(f_path, "homepage.png", orig_hp_size, orig_hp.width, orig_hp.height, "Case Study Full Homepage")

# products.png
prod_path = os.path.join(SOURCE_DIR, "products.png")
orig_prod_size = os.path.getsize(prod_path)
with Image.open(prod_path) as orig_prod:
    f_path = os.path.join(kira_dir, "products.webp")
    orig_prod.save(f_path, "WEBP", quality=82, method=6)
    record(f_path, "products.png", orig_prod_size, orig_prod.width, orig_prod.height, "Case Study Products Catalog")

# checkout.png
chk_path = os.path.join(SOURCE_DIR, "checkout.png")
orig_chk_size = os.path.getsize(chk_path)
with Image.open(chk_path) as orig_chk:
    f_path = os.path.join(kira_dir, "checkout.webp")
    orig_chk.save(f_path, "WEBP", quality=84, method=6)
    record(f_path, "checkout.png", orig_chk_size, orig_chk.width, orig_chk.height, "Case Study Checkout")

print("Project 4: Kira Store completed.")

# ------------------------------------------------------------------
# 5. Right Choice Clinic CRM
# ------------------------------------------------------------------
crm_dir = os.path.join(TARGET_DIR, "right-choice-crm")

# dashboardcrm.png
dc_path = os.path.join(SOURCE_DIR, "dashboardcrm.png")
orig_dc_size = os.path.getsize(dc_path)
with Image.open(dc_path) as orig_dc:
    dc_clean = orig_dc.copy()
    draw_dc = ImageDraw.Draw(dc_clean)
    
    # Sanitize Upcoming Sessions table student names (x: 555..750)
    sessions = [
        (1843, "Student #02"),
        (1930, "Student #05"),
        (2016, "Student #06"),
        (2100, "Student #08")
    ]
    for y, name in sessions:
        draw_dc.rectangle([555, y - 12, 750, y + 14], fill=(24, 24, 27))
        draw_dc.text((566, y - 9), name, font=font_md, fill=(228, 228, 231))
        
    # Sanitize Outstanding Invoices table family names (x: 845..1030)
    invoices = [
        (2470, "Family #03"),
        (2555, "Family #04"),
        (2640, "Family #02")
    ]
    for y, name in invoices:
        draw_dc.rectangle([845, y - 12, 1030, y + 14], fill=(24, 24, 27))
        draw_dc.text((851, y - 9), name, font=font_md, fill=(228, 228, 231))
    
    # Sanitize Calendar session pills (Leo and Lucas)
    # Wednesday 10am: Leo - Dr. Sarah (x: 580..695, y: 640..660)
    draw_dc.rectangle([580, 642, 695, 658], fill=(22, 182, 127))
    draw_dc.text((585, 643), "S#01 - Dr. Sarah", font=font_xs, fill=(255, 255, 255))
    
    # Saturday 10am: Leo - Dr. Sarah (x: 1180..1300, y: 640..660)
    draw_dc.rectangle([1180, 642, 1300, 658], fill=(0, 215, 236))
    draw_dc.text((1185, 643), "S#01 - Dr. Sarah", font=font_xs, fill=(15, 23, 42))
    
    # Saturday 2pm: Lucas - Michael (x: 1180..1300, y: 935..955)
    draw_dc.rectangle([1180, 938, 1300, 954], fill=(0, 215, 236))
    draw_dc.text((1185, 939), "S#03 - Michael", font=font_xs, fill=(15, 23, 42))
    
    # 16:9 preview (1920x1080)
    preview = dc_clean.crop((0, 0, 1920, 1080))
    p_path = os.path.join(crm_dir, "preview.webp")
    preview.save(p_path, "WEBP", quality=84, method=6)
    record(p_path, "dashboardcrm.png", orig_dc_size, 1920, 1080, "Portfolio Card Preview (16:9)")
    
    # Thumbnail (800x450)
    thumb = preview.resize((800, 450), Image.Resampling.LANCZOS)
    t_path = os.path.join(crm_dir, "preview-thumb.webp")
    thumb.save(t_path, "WEBP", quality=82, method=6)
    record(t_path, "dashboardcrm.png", orig_dc_size, 800, 450, "Thumbnail (16:9)")
    
    # Full dashboard
    f_path = os.path.join(crm_dir, "dashboard.webp")
    dc_clean.save(f_path, "WEBP", quality=84, method=6)
    record(f_path, "dashboardcrm.png", orig_dc_size, dc_clean.width, dc_clean.height, "Case Study Full Dashboard")

# Analytics.png
an_path = os.path.join(SOURCE_DIR, "Analytics.png")
orig_an_size = os.path.getsize(an_path)
with Image.open(an_path) as orig_an:
    f_path = os.path.join(crm_dir, "analytics.webp")
    orig_an.save(f_path, "WEBP", quality=84, method=6)
    record(f_path, "Analytics.png", orig_an_size, orig_an.width, orig_an.height, "Case Study Analytics & Reports")

# patients.png
pat_path = os.path.join(SOURCE_DIR, "patients.png")
orig_pat_size = os.path.getsize(pat_path)
with Image.open(pat_path) as orig_pat:
    pat_clean = orig_pat.copy()
    draw_pat = ImageDraw.Draw(pat_clean)
    
    patient_rows = [
        (1, 502, (24, 24, 27)),
        (2, 587, (24, 24, 27)),
        (3, 672, (24, 24, 27)),
        (4, 757, (24, 24, 27)),
        (5, 842, (36, 36, 39)), # hovered row
        (6, 927, (24, 24, 27)),
        (7, 1012, (24, 24, 27)),
        (8, 1097, (24, 24, 27)),
    ]
    
    for idx, y_center, bg in patient_rows:
        draw_pat.rectangle([745, y_center - 14, 1080, y_center + 14], fill=bg)
        draw_pat.rectangle([1120, y_center - 14, 1320, y_center + 14], fill=bg)
        draw_pat.text((760, y_center - 10), "Student", font=font_reg, fill=(228, 228, 231))
        draw_pat.text((947, y_center - 10), f"#{idx:02d}", font=font_reg, fill=(228, 228, 231))
        draw_pat.text((1134, y_center - 10), "••••-••-••", font=font_reg, fill=(161, 161, 170))
        
    f_path = os.path.join(crm_dir, "students.webp")
    pat_clean.save(f_path, "WEBP", quality=84, method=6)
    record(f_path, "patients.png", orig_pat_size, pat_clean.width, pat_clean.height, "Case Study Anonymized Students")

print("Project 5: Right Choice CRM completed.")

# ------------------------------------------------------------------
# 6. Hotel Booking Platform
# ------------------------------------------------------------------
hotel_dir = os.path.join(TARGET_DIR, "hotel-booking")

# home.png
h_path = os.path.join(SOURCE_DIR, "home.png")
orig_h_size = os.path.getsize(h_path)
with Image.open(h_path) as orig_h:
    # 16:9 preview (1920x1080)
    preview = orig_h.crop((0, 0, 1920, 1080))
    p_path = os.path.join(hotel_dir, "preview.webp")
    preview.save(p_path, "WEBP", quality=84, method=6)
    record(p_path, "home.png", orig_h_size, 1920, 1080, "Portfolio Card Preview (16:9)")
    
    # Thumbnail (800x450)
    thumb = preview.resize((800, 450), Image.Resampling.LANCZOS)
    t_path = os.path.join(hotel_dir, "preview-thumb.webp")
    thumb.save(t_path, "WEBP", quality=82, method=6)
    record(t_path, "home.png", orig_h_size, 800, 450, "Thumbnail (16:9)")
    
    # Full homepage
    f_path = os.path.join(hotel_dir, "homepage.webp")
    orig_h.save(f_path, "WEBP", quality=80, method=6)
    record(f_path, "home.png", orig_h_size, orig_h.width, orig_h.height, "Case Study Full Homepage")

# rooms.png
rooms_path = os.path.join(SOURCE_DIR, "rooms.png")
orig_rooms_size = os.path.getsize(rooms_path)
with Image.open(rooms_path) as orig_rooms:
    f_path = os.path.join(hotel_dir, "rooms.webp")
    orig_rooms.save(f_path, "WEBP", quality=80, method=6)
    record(f_path, "rooms.png", orig_rooms_size, orig_rooms.width, orig_rooms.height, "Case Study Rooms")

# booking.png
bkg_path = os.path.join(SOURCE_DIR, "booking.png")
orig_bkg_size = os.path.getsize(bkg_path)
with Image.open(bkg_path) as orig_bkg:
    f_path = os.path.join(hotel_dir, "booking-flow.webp")
    orig_bkg.save(f_path, "WEBP", quality=82, method=6)
    record(f_path, "booking.png", orig_bkg_size, orig_bkg.width, orig_bkg.height, "Case Study Booking Flow")

print("Project 6: Hotel Booking completed.")

print("\n--- FINAL AUDIT SUMMARY ---")
total_orig = sum(r["original_size"] for r in results)
total_new = sum(r["new_size"] for r in results)
for r in results:
    orig_kb = r["original_size"] / 1024
    new_kb = r["new_size"] / 1024
    savings = (1 - (r["new_size"] / r["original_size"])) * 100 if r["original_size"] > 0 else 0
    print(f"{r['path']} | {r['dimensions']} | {new_kb:.1f} KB (orig {orig_kb:.1f} KB) | {savings:.1f}% saved | {r['usage']}")

print(f"\nTotal new assets size: {total_new / (1024*1024):.2f} MB")
