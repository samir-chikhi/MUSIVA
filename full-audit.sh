#!/bin/bash

echo "=== AUDIT SEO COMPLET MUSIVA ===" > full-audit.txt
echo "Date: $(date)" >> full-audit.txt
echo "" >> full-audit.txt

# Count pages
total_pages=$(ls *.html | wc -l)
echo "📊 STATISTIQUES GÉNÉRALES" >> full-audit.txt
echo "=========================" >> full-audit.txt
echo "Total pages HTML: $total_pages" >> full-audit.txt
echo "" >> full-audit.txt

# Check images without alt text
echo "🖼️ IMAGES SANS ALT-TEXT" >> full-audit.txt
echo "=======================" >> full-audit.txt
images_without_alt=$(grep -h '<img' *.html | grep -v 'alt=' | wc -l)
echo "⚠️ Images sans alt-text: $images_without_alt" >> full-audit.txt
grep -h '<img' *.html | grep -v 'alt=' | head -5 >> full-audit.txt
echo "" >> full-audit.txt

# Check for canonical tags
echo "🔗 CANONICAL TAGS" >> full-audit.txt
echo "==================" >> full-audit.txt
canonical=$(grep -c 'rel="canonical"' *.html)
total=$total_pages
echo "Pages avec canonical: $canonical / $total" >> full-audit.txt
if [ $canonical -ne $total_pages ]; then
    echo "⚠️ Manque de canonical tags sur certaines pages" >> full-audit.txt
fi
echo "" >> full-audit.txt

# Check for structured data (schema.org)
echo "📋 STRUCTURED DATA (Schema.org)" >> full-audit.txt
echo "================================" >> full-audit.txt
schema_count=$(grep -l '"@context": "https://schema.org"' *.html | wc -l)
echo "Pages avec schema.org: $schema_count / $total_pages" >> full-audit.txt
echo "" >> full-audit.txt

# Check for robots.txt and sitemap
echo "🤖 FICHIERS IMPORTANTS" >> full-audit.txt
echo "======================" >> full-audit.txt
[ -f robots.txt ] && echo "✓ robots.txt: EXISTS" >> full-audit.txt || echo "❌ robots.txt: MANQUANT" >> full-audit.txt
[ -f sitemap.xml ] && echo "✓ sitemap.xml: EXISTS" >> full-audit.txt || echo "❌ sitemap.xml: MANQUANT" >> full-audit.txt
echo "" >> full-audit.txt

# Check for h2, h3 structure
echo "📝 STRUCTURE DE TITRES" >> full-audit.txt
echo "======================" >> full-audit.txt
for file in index.html tarifs.html service-tierslieu.html; do
    h2=$(grep -c '<h2' "$file")
    h3=$(grep -c '<h3' "$file")
    echo "$file: H2=$h2, H3=$h3" >> full-audit.txt
done
echo "" >> full-audit.txt

# Check internal links
echo "🔐 VÉRIFICATION DES LIENS" >> full-audit.txt
echo "=========================" >> full-audit.txt
broken=$(grep -h 'href="' *.html | grep -E 'href="[^h]' | grep -v '://' | sort -u | wc -l)
echo "Liens internes (relatifs): $broken" >> full-audit.txt
echo "" >> full-audit.txt

# Meta description length issues
echo "⚠️ LONGUEUR META DESCRIPTIONS" >> full-audit.txt
echo "=============================" >> full-audit.txt
for file in *.html; do
    desc=$(grep -o 'meta name="description" content="[^"]*"' "$file" | sed 's/.*content="//' | sed 's/".*//')
    if [ ! -z "$desc" ]; then
        len=${#desc}
        if [ $len -gt 160 ] || [ $len -lt 120 ]; then
            echo "$file: $len chars - ⚠️ NOT OPTIMAL (120-160)" >> full-audit.txt
        fi
    fi
done

cat full-audit.txt
