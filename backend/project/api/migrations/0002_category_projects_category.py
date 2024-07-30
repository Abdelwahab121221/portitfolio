# Generated by Django 5.0.7 on 2024-07-25 19:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name="projects",
            name="category",
            field=models.ForeignKey(
                default=0.5103736990542418,
                on_delete=django.db.models.deletion.CASCADE,
                to="api.category",
            ),
        ),
    ]