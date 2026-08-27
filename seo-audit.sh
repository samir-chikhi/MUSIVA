#!/bin/bash

echo "=== AUDIT SEO MUSIVA ===" > audit-results.txt
echo "" >> audit-results.txt

# Check meta tags
echo "1. VÉRIFICATION DES BALISES META" >> audit-results.txt
echo "=================================" >> audit-results.txt

for file in index.html tarifs.html service-tierslieu.html service-numerique.html contact.html; do
    echo "" >> audit-results.txt
    echo "▶ $file:" >> audit-results.txt
    
    # Title
    title=$(grep -o '<title>[^<]*</title>' "$file" | sed 's/<[^>]*>//g')
    echo "  Title: $title" >> audit-results.txt
    [ -z "$title" ] && echo "  ⚠️ MANQUANT: Title tag" >> audit-results.txt
    
    # Meta description
    desc=$(grep -o 'meta name="description" content="[^"]*"' "$file" | sed 's/.*content="//' | sed 's/".*//')
    if [ -z "$desc" ]; then
        echo "  ⚠️ MANQUANT: Meta description" >> audit-results.txt
    else
        desc_len=${#desc}
        echo "  Meta description: ${desc:0:50}... ($desc_len chars)" >> audit-results.txt
        [ $desc_len -lt 120 ] && echo "  ⚠️ COURT: Min 120 chars recommandé" >> audit-results.txt
        [ $desc_len -gt 160 ] && echo "  ⚠️ LONG: Max 160 chars recommandé" >> audit-results.txt
    fi
    
    # H1 tags
    h1_count=$(grep -c '<h1>' "$file")
    echo "  H1 tags: $h1_count" >> audit-results.txt
    [ $h1_count -ne 1 ] && echo "  ⚠️ ERREUR: Doit avoir exactement 1 H1 par page" >> audit-results.txt
    
    # OG tags
    og=$(grep -c 'property="og:' "$file")
    echo "  OG tags: $og" >> audit-results.txt
    [ $og -lt 3 ] && echo "  ⚠️ INCOMPLET: Min 3 OG tags recommandés" >> audit-results.txt
done

cat audit-results.txt
