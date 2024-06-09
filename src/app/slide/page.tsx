"use client"

import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css";
import {useRef} from "react";
import {useSlide} from "@/lib/hooks";

export default function Slide() {
    const deckDivRef = useRef<HTMLDivElement>(null);
    const deckRef = useRef<Reveal.Api | null>(null);

    useSlide(deckRef, deckDivRef)

    return (
        <div className="reveal" ref={deckDivRef}>
            <div className="slides">
                <section>
                    <h2>Continuité des activités et récupération après sinistre</h2>
                    <p>PostgreSQL sur Kubernetes</p>
                    <p>Utilisation de l&apos;opérateur CNPG</p>
                </section>
                <section>
                    <h2>Introduction</h2>
                    <p>Assurer une haute disponibilité et une récupération après sinistre pour les clusters PostgreSQL
                        sur Kubernetes.</p>
                </section>

                <section>
                    <h2>Haute Disponibilité</h2>
                    <section>
                        <h3>Réplicas de base de données</h3>
                        <p>Une configuration avec un master et plusieurs réplicas garantit qu&apos;en cas de défaillance
                            du
                            master, l&apos;un des réplicas peut être promu.</p>
                    </section>
                    <section>
                        <h3>Surveillance et alertes</h3>
                        <p>Mettre en place des outils de surveillance tels que Prometheus et Grafana pour surveiller la
                            santé de la base de données.</p>
                        <p>Configurer des alertes pour des métriques critiques telles que l&apos;utilisation de la
                            mémoire,
                            la
                            latence et le temps de réponse.</p>
                    </section>
                    <section>
                        <h3>Équilibrage de charge</h3>
                        <p>Utiliser des services tels que PgBouncer pour distribuer les charges de lecture entre les
                            réplicas.</p>
                    </section>
                </section>

                <section>
                    <h3>Maintenance planifiée</h3>
                    <section>
                        <h4>Mises à jour et correctifs</h4>
                        <p>Mettre régulièrement à jour PostgreSQL et l&apos;opérateur CNPG pour obtenir les dernières
                            fonctionnalités et correctifs de sécurité.</p>
                        <p>Utiliser des scripts CI/CD pour déployer les mises à jour lors des périodes de maintenance
                            planifiées.</p>
                    </section>

                    <section>
                        <h4>Sauvegardes régulières</h4>
                        <p>Effectuer des sauvegardes régulières pour éviter la perte de données.</p>
                        <p>Utiliser des outils tels que pg_dump ou des instantanés de volume persistant avec
                            Kubernetes.</p>
                    </section>
                </section>

                <section>
                    <h2>Récupération après sinistre</h2>
                </section>

                <section>
                    <h3>Stratégie de sauvegarde et de restauration</h3>
                    <section>
                        <h4>Plan de sauvegarde</h4>
                        <p>Planifier et automatiser les sauvegardes régulières des données.</p>
                        <p>Utiliser pg_basebackup pour les sauvegardes complètes et pg_dump pour les sauvegardes
                            logiques,
                            stockées dans des emplacements externes sécurisés (S3, GCS).</p>
                    </section>

                    <section>
                        <h4>Plan de restauration</h4>
                        <p>Documenter et tester régulièrement les procédures de restauration pour garantir une
                            récupération
                            rapide après un sinistre.</p>
                        <p>Automatiser les scripts de restauration de base de données et effectuer des tests réguliers
                            dans
                            des environnements de pré-production.</p>
                    </section>
                </section>

                <section>
                    <h3>Stratégie de réplication géographique</h3>
                    <section>
                        <h4>Réplication multi-région</h4>
                        <p>Implémenter des réplicas PostgreSQL dans plusieurs régions géographiques pour garantir la
                            disponibilité en cas de sinistre régional.</p>
                        <p>Utiliser pglogical pour la réplication logique ou WAL-E pour la réplication asynchrone vers
                            des
                            régions secondaires.</p>
                    </section>

                    <section>
                        <h4>Basculement automatique et manuel</h4>
                        <p>Mettre en place des processus de basculement automatique pour garantir une disponibilité
                            continue.</p>
                        <p>Utiliser des solutions telles que Patroni ou Stolon pour la gestion automatique du
                            basculement en
                            cas de défaillance.</p>
                    </section>
                </section>

                <section>
                    <h2>Scénarios pratiques</h2>
                    <section>
                        <h3>Scénario de défaillance de nœud</h3>
                        <p>Un nœud Kubernetes hébergeant une instance PostgreSQL tombe en panne.</p>
                        <p>L&apos;opérateur CNPG détecte la panne et promeut un réplica en maître. Les connexions sont
                            automatiquement redirigées vers le nouveau maître.</p>
                    </section>

                    <section>
                        <h3>Scénario de corruption de données</h3>
                        <p>Des données critiques sont corrompues ou supprimées accidentellement.</p>
                        <p>Utiliser des sauvegardes régulières pour restaurer les données à un état antérieur à la
                            corruption avec une perte de données minimale.</p>
                    </section>

                    <section>
                        <h3>Scénario de sinistre régional</h3>
                        <p>Un sinistre (par exemple, incendie, panne de courant) affecte toute une région.</p>
                        <p>Les réplicas géographiques dans une autre région prennent le relais, et le trafic est
                            redirigé
                            vers ces réplicas.</p>
                    </section>
                </section>

                <section>
                    <h2>Conclusion</h2>
                    <p>La mise en œuvre de stratégies robustes de continuité des activités et de récupération après
                        sinistre garantit la disponibilité et la résilience élevées des clusters PostgreSQL sur
                        Kubernetes.</p>
                </section>

                <section>
                    <h2>Questions et réponses</h2>
                    <p>Avez-vous des questions ?</p>
                </section>
            </div>
        </div>
    );
}